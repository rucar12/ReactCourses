import { Form, Input, Button, Checkbox } from 'antd';
import {useNavigate} from "react-router-dom";

import "./Login.css"


const Login = ({onLogin}) => {

    const navigate = useNavigate();
    const login = () => {
        onLogin();
        navigate("/");
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={'content_box'}>
            <div className={"login_form"}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item className={"login_item"}
                        label="Username"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',

                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className={"login_item"}
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className={"login_item"}
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item className={"login_item"}
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <input type={"submit"} value={"Submit"} onClick={login}/>


                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;