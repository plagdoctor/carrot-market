import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    username:string;
    password:string;
    email:string;
    errors?:string;
}

export default function Forms() {
       
    const {register, handleSubmit, watch,formState: {errors},setError} = useForm<LoginForm>({
        mode: "onBlur",
    });        
    
    const onValid = (data: LoginForm) => {
        console.log("i'm valid");
        // setError("errors", {message:"server errors"});
    };

    const onInvalid = (errors: FieldErrors ) => {
        console.log(errors);
    };
    console.log(watch());
    
    return (<form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input {...register("username", {required: "Username is required", minLength: {
            message: "The username should be longer than 5chars.", value: 5,
        }})} type="text" placeholder="Username"  />
        <input {...register("email", {required: "이메일주소가 필요해요", validate:{
            notNaver: (value) => !value.includes("@naver.com") || "네이버안되요" ,
            
        },})} type="email" placeholder="Email" className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`} />
        <span className="text-red-500">{errors.email?.message}</span>
        <input {...register("password", {required: "password please"})} type="password" placeholder="Password"  />
        <input type="submit" value="Create account" />
        <span className="text-red-500">{errors.errors?.message}</span>
    </form>
    );
}