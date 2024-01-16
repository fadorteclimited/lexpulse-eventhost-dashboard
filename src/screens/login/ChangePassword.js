import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectEmail} from "./LoginSlice";
import {Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {LoginError} from "./index";


export default function ChangePassword() {
    const email = useSelector(selectEmail);
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [code, setCode] = useState('');

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('0');

    return (<Container>
        <LoginError show={show} setShow={setShow} errorMessage={errorMessage}/>
        <Form>
            <FormGroup>
                <FormLabel htmlFor="email1" className="mt-0">Email address</FormLabel>
                <FormControl type={'email'} value={email} readOnly plaintext className={'form-control-login'} id={'email1'}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="codeInput" className="mt-3">Password</FormLabel>
                <FormControl className={'form-control-login'} id="codeInput"
                             placeholder="4 digit code" onChange={(e) => setCode(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="passId" className="mt-3">Password</FormLabel>
                <FormControl type="password" className={'form-control-login'} id="passId"
                             placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="passId2" className="mt-3">Confirm Password</FormLabel>
                <FormControl type="password" className={'form-control-login'} id="passId2"
                             placeholder="Password" onChange={(e) => setPass2(e.target.value)}/>
            </FormGroup>
            <FormGroup className={'mt-4'}>
                <Button className={'w-100'} variant={'primary'}>Confirm</Button>
            </FormGroup>
        </Form>
    </Container>)
}