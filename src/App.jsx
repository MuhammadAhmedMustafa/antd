import React, { useState } from "react";
import { Button, Input, List, Avatar } from 'antd';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [flag, setFlag] = useState(false);

  const addTodo = () => {
    let tempArr = [...todos];
    tempArr.push({ text: todo, avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' })
    todos.length <= 0 ? setFlag(true) : setFlag(false);
    setTodos(tempArr);
    setTodo('');
  }

  return (
    <div style={{ padding: 20 }}>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add new todo"
        style={{ width: 300, marginRight: 10 }}
      />
      <Button type="primary" onClick={addTodo}>Add Todo</Button>
      {todos.length > 0 ? (
        <List
          dataSource={todos}
          renderItem={(item) => (
            <List.Item>
              <Avatar src={item.avatar} />
              <span style={{ marginLeft: 10 }}>{item.text}</span>
            </List.Item>
          )}
        />
      ) : (
        <p>No todos yet!</p>
      )}
    </div>
  )
}