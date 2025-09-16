import "../index.css"

function Header({ addTodo, todoUpdate, todo }) {
    // const [todo,setTodo]=useState("");

    function handleChange(e) {
        todoUpdate(e.target.value);
    }

    function handleAdd() {
        addTodo(todo)
    }

    return (
        <header className="cover flex flex-col items-center justify-center min-h-30 gap-2 mt-2 rounded-lg border-2 border-black bg-amber-300 w-[50vw]">
            <h1 className="text-3xl text-white font-extrabold text-center">ToDo<span className="text-black"> List</span></h1>

            <div className="addfields w-full max-w-sm min-w-[200px]">
                <div className="relative border-white border-2 rounded-md bg-white">
                    <input type="text" className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-amber-800 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-amber-400 hover:border-amber-300 shadow-sm focus:shadow" placeholder="Add your tasks here" value={todo} onChange={(e) => {
                    handleChange(e);
                }}  />
                    <button
                        className="absolute right-1 top-1 rounded bg-amber-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-amber-700 focus:shadow-none active:bg-amber-700 hover:bg-amber-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                        type="button" onClick={handleAdd} disabled={todo.length <= 3}
                    >
                        Add
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;