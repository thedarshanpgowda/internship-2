import "../App.css";
import Studentform from "./Studentform";
import styles from "../components/Form.module.css";
import Chart from "../components/Chart";
import Studentsecondary from "./Studentsecondarypage";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "../components/Modal";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StudentProfileContext from "../context/Newcontext";
import { BASE_URL } from "../helper";
import useAxiosPrivate from "../components/useAxiosPrivate";

function Mainstudentblock() {
  const [studentstate, setstudentState] = useState([]);
  const [view, setview] = useState(false);
  const user = useContext(StudentProfileContext)
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const [modal, setmodal] = useState({
    message: "",
    status: ""
  })

  // useEffect(() => {
  //   if (user.user.isSuccess && localStorage.getItem("data") && JSON.parse(localStorage.getItem("data")).isSuccess) {
  //     // console.log("mainstudentblock.js/22")
  //     navigate("/mnm/student");
  //   }
  //   else {
  //     navigate("/mnm/")
  //   }
  // }, [user.user.isSuccess, navigate])

  const updateQuestion = (res) => {
    setstudentState(res.data.data)
  }

  const controller = new AbortController()

  useEffect(() => {
    const main = async () => {
      // console.log(user.user)
      await axiosPrivate
        .get('/api/home')
        .then((res) => {
          updateQuestion(res)
        })
        .catch((err) => console.log("error while getting student questions"));
    }

    if (user.user.isSuccess) {
      main()
    }
    
    return () =>{
      controller.abort()
    }

  }, [view]);


  const submitHandler = async (e, data) => {
    e.preventDefault();
    console.log(data);
    // return

    await axiosPrivate
      .post(`/api/home`, data)
      .then((res) => {
        setmodal({
          message: "Your querry is submitt",
          status: "Success"
        })
        setview(true);
        console.log("success ")
      })
      .catch((err) => {
        setmodal({
          message: "Your querry is not submitt",
          status: "Failure"
        })
        console.log("error while posting the data ", err)
      });
  };

  const onClose = () => {
    setview(false);
    setmodal({
      message: "",
      status: ""
    })
    // window.location.reload();
  };



  return (
    <div className="rightblockcontainer">
      <div className="profilePic">
        <img
          src={user.user.img || "https://cdn-icons-png.flaticon.com/128/64/64572.png"}
          alt="profilelink"
          className='profilepic'
          onClick={() => {
            const navigationBarBlock = document.querySelector('.navigationBarBlock');
            if (navigationBarBlock) {
              navigationBarBlock.style.marginTop = "0%";
            }
          }}
        />
      </div>
      <Chart className="flexbox">
        <Chart className="nameBlock">Post your Querry here</Chart>
      </Chart>
      <Chart className={styles.mainBlock}>
        <Studentform submitHandler={submitHandler} />
        <hr />
        <Studentsecondary state={studentstate} />
        <Modal view={view} onClose={onClose} setview={setview} status={modal.status} message={modal.message}>
        </Modal>
      </Chart>
    </div>
  );
}

export default Mainstudentblock;
