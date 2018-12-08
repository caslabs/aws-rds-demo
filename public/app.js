const postName = document.querySelector('#namePOST');
const postGrade = document.querySelector('#gradePOST');
const postSub = document.querySelector('#postBtn');
const studentVar = document.querySelector('#studentID');

const putBtn = document.querySelector('#putBtn');
const idPUT = document.querySelector('#idPUT');
const namePUT = document.querySelector('#namePUT');
const gradePUT = document.querySelector('#gradePUT');


const delBtn = document.querySelector('#delBtn');
const idDEL = document.querySelector('#idDEL');

getList()

delBtn.addEventListener('click', (event) => {
  event.preventDefault;
  console.log(idDEL.value)
  axios.delete('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/delete', {
    data: {
      id: idDEL.value
    }
  })
  .then(function (response) {
    console.log(response);
    getList()
  })
  .catch(function (error) {
    console.log(error);
  });
})

postSub.addEventListener('click', (event) => {
  event.preventDefault;
  axios.post('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/post', {
    name: postName.value,
    grade_level: postGrade.value //why is this null?
  })
  .then(function (response) {
    console.log(response);
    getList()
  })
  .catch(function (error) {
    console.log(error);
  });
});

putBtn.addEventListener('click', (event) => {
  event.preventDefault;
  axios.put('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/put', {
    name: namePUT.value,
    grade_level: gradePUT.value,
    id: idPUT.value
  })
  .then(function (response) {
    console.log(response);
    getList()
  })
  .catch(function (error) {
    console.log(error);
  });
})
function getList() {
  studentID.innerHTML = " ";
  axios.get('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/get')
  .then(function (response) {
    var StudentData =  response.data.message.rows;

    StudentData.forEach(function (student) {
      console.log(`ID: ${student.id} NAME:  ${student.name} GRADE: ${student.grade}`);
      studentID.innerHTML += `ID: ${student.id} NAME:  ${student.name} GRADE: ${student.grade} <br>`
    }); 
  })
  .catch(function (error) {
    console.log(error);
  });
}




