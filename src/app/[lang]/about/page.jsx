import { getDictionary } from "../../../localization/get-dictionary";

export default async function About({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="home-page">
      <h1>Welcome to SSS About </h1>

      <ul>
        {dictionary.employees.map((employee, index) => {
          return (
            <li key={index}>
              <h2>name : {employee.name}</h2>
              <h2>position : {employee.position}</h2>
              <ol>
                {employee.skills.map((skill, i) => {
                  return <li key={i}> {skill} </li>;
                })}
              </ol>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
