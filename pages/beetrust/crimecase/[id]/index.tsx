import type { NextPage } from "next";

const Home: NextPage = (props : any) => {
  
  return ( 
    <section id='mainPage'>
      <div></div>
    </section>
  );
  
}

export async function getStaticProps(context: any) {
  let path = '';
  // path = context.query.path[0];
  // context.query.path.forEach((param: string) => path += ('/' +param));
  // path = path.substring(1, path.length);

  // let cdnData = await axios.get('https://devcdnbeeblock.cdn.ntruss.com/web' + path);
  // let contentData = await cdnData;
  // console.log(contentData);


  // console.log(initData);

  // alert(context);

  console.log('getStaticProps' , context)

  return {
      props: {
          id : path,
      }, // will be passed to the page component as props
  };
}

export async function getStaticPaths(context : any) {

    let paths: any[] = [];
    paths = [
      { params : { id : 'fishing'}} ,
      { params : { id : 'ponzi'}} ,
      { params : { id : 'impersonation'}} ,
    ];
  
  
    //console.log('paths :', paths);
    // function getRouters() {
    //     return data
    // }
  
    return { paths: paths, fallback: true }
}

export default Home;
