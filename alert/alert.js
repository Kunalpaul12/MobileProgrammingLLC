import React,{Component} from 'react'

var login = {
    incompleted_detail:{
        header:'Incomplte detail',
        title:'Please provided required information'
    },
    login_fail:{
        header:'Login fail',
    },
    user_detail_failed:{
        header:'Login fail',
        title:'Failed to varify with given credentials'
    }
}

var signUp ={
    validEmailId:{
        title:'Email address not valid',
        message:'Please provide a valid email id'
    }
}
var signUpSucessfully ={
        title:'Email address not valid',
        message:'Please provide a valid email id'
}

module.exports={
    login,
    signUp,
    signUpSucessfully    
}