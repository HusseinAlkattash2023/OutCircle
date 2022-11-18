import React , {useState , useEffect} from 'react'
import {BsArrowUpShort} from "react-icons/bs"
import { Link } from 'react-router-dom'
import logo from "../../images/logo.svg"
import back from '../../images/back.png'
import toast  ,{Toaster} from 'react-hot-toast';
import Axios from 'axios';
import ForgetPass from '../../component/ForgetPass/ForgetPass';
import ResetPass from '../../component/ResetPass/ResetPass';
import login from '../../images/Mask Group 2.png'
import logoLogin from '../../images/logoLogin.png'
import { useTranslation } from "react-i18next";

import './Login.css'
function Login_ar() {
    const { t } = useTranslation();
    const intialValues = { email: "", password: "" , user_type:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLogin , setShowLogin] = useState(true);
    const [forgetPass , setForgetPass] = useState(false);
    const [resetpass , setResetPass] = useState(false);

    const ShowLogin = () => {
        setShowLogin(false)
        setForgetPass(true)
    }
    const ResetPassword = () => {
        setShowLogin(false);
        setForgetPass(false);
        setResetPass(true)
    }

    const submitForm = ()=>{
        console.log(formValues);
    }
    const handleChange = (e)=> {
        const{name , value} = e.target;
        setFormValues({...formValues , [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true);
        Axios.get(`http://localhost:8000/users?${`email=${formValues.email}`}&${`password=${formValues.password}`}&${`user_type=${formValues.user_type}`}`)
        .then((res)=>{
            console.log(res)
            if(res.data === "Error !!!" || res.data === "عذراً الإيميل الذي ادخلته غير موجود ، رجاءً أدخل إيميل آخر من فضلك ..." || res.data === "كلمة السر التي أدخلتها غير صحيحة ، من فضلك أعد إدخال كلمة السر بشكل صحيح .."){
                toast.error(res.data)
            }else{
                toast.success("Successed")
                localStorage.setItem('items', JSON.stringify({ ...formValues }));
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Please enter email";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
        }
        if (!values.password) {
          errors.password = "Please enter password";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        }
        if(!values.user_type){
            errors.user_type = "Please enter account";
        }
        return errors;
      };
    
    return (
    <div className='login'>
        <Link to="/" className='back_ar'>
            <img src={back} alt=""/>
            <span>رجوع</span>
        </Link>
        <div className="login_ar">
        {
        showLogin && (
        <div>
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <img src={logoLogin} alt="" style={{width:"225px"}}/>
            </div>
            <div>
            {/* {Object.keys(formErrors).length === 0 && isSubmitting && (
                alert("successed")
            )} */}
                <div><Toaster/></div>
                <form onSubmit={handleSubmit} noValidate>
                <div className='bar'>
                    <div className='select mt-3'>
                        <label>اختر نوع الحساب</label><br/>
                        <select name='user_type' value={formValues.user_type} onChange={handleChange}>
                        <option value="">...</option>
                        <option value="companies">Corporate</option>
                        <option value="institutes">Institute</option>
                        <option value="scientific_careers">Scientific Profissional</option>
                        <option value="craftsmen">Handicraft</option>
                        <option value="individuals">Individuals</option>
                        </select>
                    {formErrors.user_type && (
                        <span className="error" style={{color:"red"}}>{formErrors.user_type}</span>
                        )}
                    </div>
                    <div className='email mt-3'>
                        <label htmlFor="email" >رقم الموبايل أو الإيميل</label><br/>
                        <input 
                        type="email" 
                        name='email' 
                        id="email" 
                        value={formValues.email}
                        onChange={handleChange}
                        className={formErrors.email && "input-error"}
                        />
                        {formErrors.email && (
                        <span className="error" style={{color:"red"}}>{formErrors.email}</span>
                        )}
                    </div>
                    <div className='password mt-3'>
                        <label htmlFor="password_">كلمة المرور</label><br/>
                        <input 
                        type="password" 
                        id="password" 
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                        className={formErrors.password && "input-error"}
                        />
                        {formErrors.password && (
                        <span className="error" style={{color:"red"}}>{formErrors.password}</span>
                        )}
                    </div>
                    </div>
                    <Link className='forget'  onClick={ShowLogin}>نسيت كلمة المرور</Link>
                    <button type='submit' className='loginButton mt-3'>تسجيل الدخول</button><br/>
                </form>
                <div className='register mt-3'>
                    <p className='my-0'>هل لديك حساب؟</p>
                    <Link to="/register">
                        <button>التسجيل</button>
                    </Link>
                </div>
            </div>
        </div>)}
        {
            forgetPass && (
                <div>
                    <ForgetPass ResetPassword={ResetPassword}/>
                </div>
            )
        }{
            resetpass && (
                <div>
                    <ResetPass/>
                </div>
            )
        }
        </div>
        <div className="section2_ar">
            <img src={login} alt=""/>
        </div>
    </div>
)
}

export default Login_ar
