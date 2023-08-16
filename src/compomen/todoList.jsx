const TodoList = (props) => {
    const renderInfor = ()=>{
        let listInfor = localStorage.getItem('list-infor') ? JSON.parse(localStorage.getItem('list-infor')):[];
        let tableContent = document.getElementById('tableContent');
        let infor = `<tr>
            <th>work</th>
            <th>process</th>
        </tr>`
        listInfor.map((value,index)=>{
            infor += `<tr>
                <td>${value.work}</td>
                <td>${value.process}</td>
            </tr>`
        })
        tableContent.innerHTML = infor;
    }
    
    const resetInput = () => {
        document.getElementById('work').value = '';
        document.getElementById('process').value = '';
    }
    const validateInput = () =>{
        let formElement = document.querySelector('.form');
        let inputElement = formElement.querySelectorAll('.input');
        for (let i = 0; i < inputElement.length; i++){
            if(inputElement[i].value === ''){
                inputElement[i].parentElement.querySelector('.error-massage').innerText = 'error';
                inputElement[i].placeholder = `Please enter your ${inputElement[i].id}`;
                inputElement[i].classList.add('error');
            }
            else{
                inputElement[i].classList.remove('error');
                inputElement[i].placeholder = `${inputElement[i].id}`;
            }
        }
    }

    const addInfor = ()=>{
        validateInput();
        let formElement = document.querySelector('.form');
        let errorElement = formElement.querySelectorAll('.error-massage');
        let errorArray = [];
        for (let i = 0; i < errorElement.length; i++){
            errorArray.push(errorElement[i].innerText);
        }

        let checkElement = errorArray.every((value)=>{
            return value === '';
        })
        
        if(checkElement){
            let work = document.getElementById('work').value;
            let process = document.getElementById('process').value;
            
            let listInfor = localStorage.getItem('list-infor') ? JSON.parse(localStorage.getItem('list-infor')):[];
            listInfor.push({
                work: work,
                process: process,
            })
            localStorage.setItem('list-infor',JSON.stringify(listInfor));
            document.getElementById('close').click();
            renderInfor();
            resetInput();
        }
    } 


    return (
        <div id='body' style={{paddingLeft:'10px'}}>
            <h1>TodoList</h1>
            <button type="button" onClick={resetInput} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Enter infor</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body form">
                        <div className="form-group">
                            <input className="input" style={{width: '100%'}} id="work" placeholder="work"></input>
                            <div className="error-massage" style={{display: 'none'}}></div>
                        </div>
                        <div className="form-group">
                            <input className="input" style={{width: '100%'}} id="process" placeholder="process"></input>
                            <div className="error-massage" style={{display: 'none'}}></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='close'>Close</button>
                        <button type="button" className="btn btn-primary" onClick={addInfor}>Update</button>
                    </div>
                    </div>
                </div>
            </div>
            <table id='tableContent' cellSpacing='0' cellPadding='10'></table>
        </div>
    )
}

export default TodoList;