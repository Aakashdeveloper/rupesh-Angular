import React  , {Component} from 'react';

/*const Header = () =>{
    return <div>Logo come here</div>
}*/

class Header extends Component{
    render(){
        return(
            <header>
                <div>Logo</div>
                <input type="text"/>
            </header>
        )
    }
}

export default Header;