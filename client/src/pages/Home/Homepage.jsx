import { Button, Form, Input, InputNumber } from 'antd';
import classes from "./Homepage.module.css"
import { useState } from 'react';
import axios from 'axios';


const Home = () => {
    const [underText, setUnderText] = useState("");
    const [underColor, setUnderColor] = useState("green");

    const onFinish = (values) => {
        addStudent(values)

        setUnderColor("green")
        setUnderText("Student " + values.name + " " + values.surname + " added");
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        setUnderColor("red")
        setUnderText("Error: Please enter all information");
        console.log('Failed:', errorInfo);
    };

    const addStudent = (student) => {
        axios.post("http://localhost:8080/students", student)
    }

    return (
        <div className={classes.homeBox}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                className={classes.formBox}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Surname"
                    name="surname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your surname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div className={classes.underText}>
                <p style={{ color: underColor }}>{underText}</p>
            </div>
        </div>
    )
}

export default Home