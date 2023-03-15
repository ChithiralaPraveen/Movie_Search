import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';


function ReviewList() {
    const [reviewData, SetreviewData] = useState([]);

    useEffect(() => {
        GetReviewData();
    },[])

    const DeleteAction = (id) => {
        const deleteId = id;
        

        fetch('https://localhost:7161/Review/Delete?reviewid='+deleteId , { method: 'DELETE' })
        .then(
            alert("deleted"),
            GetReviewData()
            );

        
    }


   


const GetReviewData = () => {
    let AdminRole = false;
    localStorage.getItem('Username') === 'admin' ? AdminRole=true : AdminRole=false ;
    if (AdminRole) {
        fetch(`https://localhost:7161/Review/Getall`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    SetreviewData(data)
                } else {
                }
            });
    }
    else {
        
    }
}
let AdminRole = false;
    localStorage.getItem('Username') === 'admin' ? AdminRole=true : AdminRole=false ;
if(AdminRole){

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Review date</th>
                    <th>Review</th>
                    <th>Review by</th>
                    <th>Movie</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {reviewData.map((n) =>
                    <tr key={n.id}>
                        <td>{n.id}</td>
                        <td>
                            {format(new Date(n.reviewdate), 'dd-MM-yyyy k:mm')}
                        </td>
                        <td>{n.reviewdata}</td>
                        <td>{n.username}</td>
                        <td>{n.moviename}</td>
                        <td><button onClick={()=>DeleteAction(n.id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}
else{
    return(<h1>not authourised</h1>)
}

            }
            

export default ReviewList;