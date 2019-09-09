import React,{Component} from 'react';
import ReactWaterMark from 'react-watermark-component';

 class Watermark extends Component{
     render(){
        const text =`პროექტები`
        const options = {
            // chunkWidth: 200,
            // chunkHeight: 60,
            // textAlign: 'left',
            // textBaseline: 'bottom',
            // globalAlpha: 0.17,
            // font: '14px Microsoft Yahei',
            // rotateAngle: -0.26,
            // fillStyle: '#666'
          }
         return(
<ReactWaterMark
        waterMarkText={text}
        // options={options}
      >
      </ReactWaterMark>
         );
     }
 }
 export default Watermark