import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;