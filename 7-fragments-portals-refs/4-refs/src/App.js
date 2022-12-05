import Card from "./components/UI/Card";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  const saveUserHandler = (user) => {
    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  console.log(users);
  return (
    // !This is a (React Fragment) built in wrapper
    <>
      <main className="w-[640px] max-w-full mx-auto p-6 grid gap-6">
        <Card className="p-4">
          <AddUser addedUser={saveUserHandler} />
        </Card>
        <UserList users={users} />
      </main>
    </>
  );
}

export default App;
