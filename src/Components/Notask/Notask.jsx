import "./Notask.css";

const Notask = ({ state }) => {
    return (
        <div className="no_task_container">
            <img src="https://i.ibb.co/sWPJddD/image.png" alt="" />
            <p>Looks like you dont have any available {state} </p>
        </div>
    );
};

export default Notask;