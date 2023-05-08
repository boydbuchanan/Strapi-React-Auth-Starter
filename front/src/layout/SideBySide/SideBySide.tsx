
import './SideBySide.css';

export const SideBySide = (props: any) => {
  return (
    <div className="side-by-side" style={props.style}>
      <div className="left" style={{
        backgroundImage: 'url(https://picsum.photos/900/1200)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      </div>
      <div className="right">
        {props.children}
      </div>
    </div>
  )
};

export default SideBySide;