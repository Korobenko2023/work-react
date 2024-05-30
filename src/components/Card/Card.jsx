import data from '../../data.json';
import { Head } from '../Head/Head';
import { Containe, Photo } from './Card.styled';

export const Card = ({ isOnLine }) => {
  return data.map((photo) => {
      return (
        <Containe key={photo.id} isHide={isOnLine}>
          <Photo src={photo.url} alt={photo.title} />
          <div>
            <h5>Card-title: {photo.title}</h5>
            <Head id='id-123' clas='card-title'>
              ffnfjror
              <div>rffr4f4f</div>
              </Head>
            <a href="http">Go somewhere</a>
          </div>
        </Containe >
      )
    })
};

//===bootstrap==//
// export const Card = () => {
//   return data.map((photo) => {
//       return (
//         <div
//           key={photo.id}
//           className="card mx-auto my-2"
//           style={{ width: "18rem" }}>
//           <img src={photo.url} className="card-img-top" alt={photo.title} />
//           <div className="card-body">
//             <h5 className="card-title">Card-title: {photo.title}</h5>
//             <Head id='id-123' clas='card-title'>
//               ffnfjror
//               <div>rffr4f4f</div>
//               </Head>
//             <a href="http" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div >
//       )
//     })
// };

