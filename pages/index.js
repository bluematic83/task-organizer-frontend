import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Οργανωτής Εργασιών</h1>
      {tasks.length === 0 ? (
        <p>Δεν υπάρχουν εργασίες.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong> - {task.category}<br/>
              <em>{task.dueDate}</em> | {task.status}<br/>
              {task.notes && <span>Σημειώσεις: {task.notes}</span>}
              <hr/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}