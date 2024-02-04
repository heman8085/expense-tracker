function handleFormSubmit(event){
    event.preventDefault();
    const expenseAmount = event.target.expenseAmount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
  
  const obj = {
    expenseAmount,
    description,
    category
  }
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showUserOnScreen(obj);
    event.target.expenseAmount.value = '';
    event.target.description.value = '';
    event.target.category.value = '';
  }
  
  function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfItems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.expenseAmount + ' - '+ obj.description + ' - '+ obj.category + ' - ';
  
    const deleteButton = document.createElement('input');
    deleteButton.type = "button"
    deleteButton.value = "Delete Expense"
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
         clearInputFields()
    }
   
  const editButton = document.createElement('input')
  editButton.type = "button"
  editButton.value = "Edit Expense"
  editButton.onclick = () => {
    localStorage.removeItem(obj.email)
    parentElem.removeChild(childElem)
    document.getElementById('expenseAmount').value = obj.expenseAmount
    document.getElementById('description').value = obj.description
    document.getElementById('category').value = obj.category
  }
  
    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentElem.appendChild(childElem)
  
  function clearInputFields() {
    document.getElementById('expenseAmount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
  }
  }



  
  