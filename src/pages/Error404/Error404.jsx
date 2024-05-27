import { Result } from 'antd'

const Error404 = () => (
    <Result
        status="404"
        title="404"
        subTitle="Запрошенная страница не существует"
    />
);

export default Error404