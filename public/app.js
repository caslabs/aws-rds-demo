const postName = document.querySelector('#namePOST');
const postGrade = document.querySelector('#gradePOST');
const postSub = document.querySelector('#postBtn');

const studentVar = document.querySelector('#studentID');

getList()

postSub.addEventListener('click', (event) => {
  event.preventDefault;
  axios.post('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/post', {
    name: postName.value,
    grade: postGrade.value //why is this null?
  })
  .then(function (response) {
    console.log(response);
    getList()
  })
  .catch(function (error) {
    console.log(error);
  });
});

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




