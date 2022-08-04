import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface newD {
    expense: Number;
    note: string
}


const Header: NextPage = () => {
    const [income, setIncome] = useState(10000000);
    const [totalExpense, setTotalExpense] = useState(0);
    const [showhistory, setshowHistory] = useState(false);

    // const [data, setData] = useState<[{  expense : Number, note : String}]>()
    const [data, setData] = useState<any | null>([]);
    const [edit, setEdit] = useState<boolean | null>(false);
    const [value, setValue] = useState<string | null>('');

    // const [updatedData, setUpdatedData] = useState<any | null>([]);

    // const Data : Array <any> = [];
    const [updatedData, setUpdatedData] = useState(
        {
            expense: 0,
            note: '',
            description: '',
            date: '',
            location: '',
        }
    );
console.log(typeof(updatedData),"line no 36");

    const [formData, setformData] = useState(
        {
            expense: 0,
            note: '',
            description: '',
            date: '',
            location: '',
        }
    );

    const [totalBalance, settotalBalanceNote] = useState(0);



    const router = useRouter()

    const handleChange = (event: any) => {
        console.log("come change in");

        setformData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData, "form data is heere");
    }
  const handleEditChange = (event:any)=> {
    setUpdatedData({ ...updatedData, [event.target.name]: event.target.value })
    console.log(updatedData, "form data ggis heere");
  }


    const clearHistory = (e: any) => {
        e.preventDefault();
        setshowHistory(true);

    }

    const handleSubmit = (event: any) => {
        console.log("come n ");
        event.preventDefault();

        setData([...data, formData])
        //   Data.push(...formData.note,formData.note);

        console.log(income, formData.expense, "iiiii");
        console.log("formData.expense+totalExpense", Number(), totalExpense)
        setTotalExpense(Number(formData.expense) + Number(totalExpense))
        settotalBalanceNote(Number(income) - Number(formData.expense))
        // console.log(Number(totalBalance)-Number(formData.expense),"hhhhf");
        console.log(data, "data is here");

    }

    const deleteExpences = (id: any) => {
        console.log(id, "id is here");

        let newData = data && data.filter((i: any) =>  i.expense !== id);
        console.log(newData, "modified data");
        setData(newData)

    }

    const handleEdit = (id:any)=>{
        setValue(id)
        setEdit(true)
        console.log("come in edit");
        
        let values = data && data.filter((i: any) =>  i.expense == id);
        console.log(typeof(values), "modified data");
    setUpdatedData(values)
       console.log(updatedData,"updated datas");
       console.log(values,"============>data from edit");
       setUpdatedData(values)
    }
    // console.log(updatedData[0].expense,"updated data after function");
    console.log(typeof(updatedData),"true or false");
    

    const handleUpdate=(event:any)=>{
         console.log(value,"com in updated func");
         event.preventDefault();
         let obj = data && data.findIndex((o :any) => o.expense === value);
console.log(obj,"'ffdf");
          if (obj !==null) {
              console.log("come in if condi");
              
            data[obj] = updatedData;
          }
        

         
    }

    console.log(data,"=======================");
    
    
    return (
        <>
            <div className='row ml-5'>
                <span className='text-dark ' > <span className='h3'> total balance : {totalBalance} <b>rs</b> </span></span>
                <span className='text-dark ' > <span className='h3'> total expense : {totalExpense} <b>rs</b> </span></span>

                <form   >
                    <div className="form-group ">
                        <label >Expenses</label>
                        <input className="form-control col-6 sm-4 xs-4" name='expense' type='number' onChange={edit?handleEditChange:handleChange} value={edit?updatedData[0].expense:formData.expense} placeholder="Enter Expense" />

                    </div>
                    <div className="form-group">
                        <label >Note:</label>
                        <input type="text" value={edit?updatedData[0].note:formData.note} name='note' onChange={edit?handleEditChange:handleChange} className="form-control lg-6 lg-4 " placeholder="Note" />
                    </div>

                    <div className="form-group">
                        <label >Description:</label>
                        <input type="text" value={edit?updatedData[0].description:formData.description} name='description' onChange={edit?handleEditChange:handleChange} className="form-control lg-6 lg-4 " placeholder="Note" />
                    </div>

                    <div className="form-group">
                        <label >Date:</label>
                        <input type="date" value={edit?updatedData[0].date:formData.date} name='date' onChange={edit?handleEditChange:handleChange} className="form-control lg-6 lg-4 " placeholder="Note" />

                    </div>
                    <div className="form-group">
                        <label >Location:</label>
                        <input type="text" value={edit?updatedData[0].location:formData.location} name='location' onChange={edit?handleEditChange:handleChange}className="form-control lg-6 lg-4 " placeholder="Note" />
                    </div>
                    <button onClick={ edit ? handleUpdate : handleSubmit} className="btn btn-primary mt-5">Submit</button>
                    <button onClick={clearHistory} className=" btn btn-primary mt-5 mx-5">History</button>

                </form>
            </div>
            {showhistory && data ? <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th scope="col">Expense</th>
                        <th scope="col">Note</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item: any) => {
                        return <tr>
                            <th scope="row"></th>
                            <td>{item.expense}</td>
                            <td>{item.note}</td>
                            <td>{item.description}</td> 
                            <td>{item.date}</td>
                            <button className='btn btn-primary bg-danger' onClick={()=>handleEdit(item.expense)} >Edit</button>
                            <button className='btn btn-primary bg-danger' onClick={() => deleteExpences(item.expense)}>Delete</button>

                            {/* <button className='btn-btn-primary bg-warning' >Delete</button> */}

                        </tr>
                    })}
                </tbody>
            </table>
                : 'nothing to show'}


            {/*  */}
        </>
    )
}

export default Header;
