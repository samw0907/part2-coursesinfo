const Header = ({ courses }) => <h1>{courses}</h1>

const Total = ({ parts }) => {
  return (
    <>
    <p>Number of exercises {parts.reduce(function(sum, parts) {
    return sum + parts.exercises
    }, 0)}</p>
    </>
  )
}

const Part = ({ name, exercise, id }) => 
  <p key={id}>
    {name} {exercise}
  </p>


const Content = ({ parts }) => {
// console.log(parts)
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercise={part.exercises} key={part.id}/>
      ))}
    </>
  )
}

const Course = ({courses}) => {
  // console.log(courses)
  return (
<>
    {courses.map((courses) => (
<>
<Header courses={courses.name} key={courses.name.id}></Header>
<Content parts={courses.parts} key={courses.name.id}></Content>
<Total parts={courses.parts} key={courses.name.id}></Total>
</>
))}
</>
)}


export default Course