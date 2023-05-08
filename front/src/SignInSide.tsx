import SideBySide from 'layout/SideBySide';
import * as React from 'react';

export default function SignInSide() {

  return (
    <SideBySide style={{
      backgroundColor: '#fff',
    }}>
      <h1>Sign In</h1>
      <img
        className="rnd-image"
        src="https://picsum.photos/300/300"
        alt="Front End Starter"
      />
      <ul>
        <li>Nginx</li>
        <li>Strapi</li>
        <li>React</li>
      </ul>
      
      <a href="/cms/admin">
        <button>Admin</button>
      </a>

      <a href="/cms/api/connect/facebook">
        <button>Connect with Facebook</button>
      </a>
      
      <a href="/cms/api/connect/google">
        <button>Connect with Google</button>
      </a>
    </SideBySide>

  );
}
