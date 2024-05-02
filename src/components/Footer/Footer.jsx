import styles from './footer.module.css'
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

function Footer() {
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
    return (
        <footer>
            <div className={styles.formWrapper}>
                <h3 className={styles.title}>Please use the following form to report an issue you are having with our site</h3>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                    maxWidth: 600,
                    minWidth: 200,
                    margin: "10px",
                    justifyItems: "center"
                    }}
                    validateMessages={validateMessages}
                >
                    
                    <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                    <Input style={{backgroundColor: "transparent"}}/>
                    </Form.Item>
                    <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                        type: 'email', required: true,
                        },
                    ]}
                    >
                    <Input style={{backgroundColor: "transparent"}}/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Problem">
                    <Input.TextArea  style={{backgroundColor: "transparent"}} />
                    </Form.Item>
                    <Form.Item
                    style={{textAlign: "end"}}
                    >
                    <Button type="text" htmlType="submit">
                        Send
                    </Button>
                    </Form.Item>
                </Form>
            </div>

        </footer>
    )
}

export default Footer;