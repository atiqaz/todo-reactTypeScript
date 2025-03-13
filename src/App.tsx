import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/shared/Button";
import Input from "./components/shared/Input";
import Lists from "./components/nonshared/Lists";
import { dataSetProps } from "./interfaces/Interfaces";


const getDatFromLocalStorage =()=>{
  const data = localStorage.getItem('todo-data')
  if(data){
    return JSON.parse(data)
  }
  return []
}

function App() {
  // -------------------- State & Ref ------------------------
  const [data, setData] = useState<dataSetProps[]>(getDatFromLocalStorage());
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<string>("");

  // -------------------- Handle Input Change ------------------------
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    inputRef.current = e.target.value; // Store latest value in ref
  }, []);

  // ---------------------Adding to LocalStorage-----------------------------

  useEffect(()=>{
    localStorage.setItem('todo-data',JSON.stringify(data))
  },[data])
  // -------------------- Handle Button Click ------------------------
  const CLickMe = useCallback(() => {
    if (!inputRef.current.trim()) return; // Prevent empty input

    const _id = String(Date.now());
    const time = new Date().toLocaleString();

    const newData: dataSetProps = {
      _id,
      item: inputRef.current,
      createdAt: time,
      isCompleted: false,
    };

    setData((prev) => [...prev, newData]);

    // Reset input values
    setInputValue("");
    inputRef.current = "";
  }, []);

  const onDelete = (_id: string) => {
    const deleted = data.filter((it) => it._id !== _id);
    setData(deleted);
  };

  
  const onUpdate = (id: string, text: string) => {
    const time = new Date().toLocaleString();
    const updated = data.map((x) => {
      if (x._id == id) {
        return {
          ...x,
          item: text,
          updatedAt: time,
        };
      }
      return x;
    });
    setData(updated);
  };

  const markAsComplete = (_id: string) => {
    const updated = data.map((x) => {
      if (x._id == _id) {
        return {
          ...x,
          isCompleted: !x.isCompleted,
        };
      }
      return x;
    });
    setData(updated);
  };
  return (
    <div className="app-container">
      <h2>📋 Create Lists</h2>
      <Input value={inputValue} onChange={onChange} />
      <Button title=" ➕ Add Item" onClick={CLickMe} />
      <Lists
        data={data}
        onDelete={onDelete}
        onUpdate={onUpdate}
        markAsComplete={markAsComplete}
      />
    </div>
  );
}

export default App;
