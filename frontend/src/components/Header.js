import React from "react";
import { Link } from "react-router-dom";
import agent from '../agent';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {props.currentUser.role === "admin" && (
          <>
            <li className="nav-item">
              <Link to="/editor" className="nav-link">
                <i className="ion-compose"/>&nbsp;New Item
              </Link>
            </li>

            {process.env.NODE_ENV === 'development' && (
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={generateItems}>
                  <i className="ion-compose"/>&nbsp;Generate Items
                </a>
              </li>
            )}
          </>
        )}

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"/>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic pr-1"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

function generateItems(e) {
    e.preventDefault();
    const promises = [];
    for (let i = 0; i < 100; i++) {
        const id = makeid(6);
        const item = {
            title: `Item ${id}`,
            description: `Description for item ${id}`,
            image: getImage(i),
            tagList: ['news'],
            slug: `item-${id}`
        };
        promises.push(agent.Items.create(item));
    }
    Promise.all(promises).then(() => {
        alert('items created');
    }).catch((error) => {
        alert('error creating items, see console for more info');
        console.error('error creating items, error: ', error);
    })
}

function getImage(i) {
    const images = [
        'https://images.unsplash.com/photo-1500423079914-b65af272b8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1495100793874-7f94aecae1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMzQ0NTA3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1484420269607-41d8060e9779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzQ0NTA3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1494247872528-c25b4623cf0d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMzQ0NTA3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1490698900541-76d9b74bdcac?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1460891053196-b9d4d9483d9b?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1473210630848-e12656228f26?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1428280047984-b1e0c0cfe2b7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MTM0NDUwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ];
    return images[i % images.length];
}

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          {this.props.appName}
        </Link>

        <LoggedOutView currentUser={this.props.currentUser} />

        <LoggedInView currentUser={this.props.currentUser} />
      </nav>
    );
  }
}

export default Header;
