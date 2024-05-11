const setup = () => {
    let s1 = "hallo";
    let s2 = "hallo";
    console.log( s1 == s2 );
    console.log( s1 === s2 );

    let s3 = "hallo";
    let s4 = "hallo wereld!".slice(0,5);
    console.log( s3 == s4 );
    console.log( s3 === s4 );

    let s5 = "hallo wereld!".slice(0,5);
    let s6 = "hal"+"lo";
    console.log( s5 == s6 );
    console.log( s5 === s6 );
}

window.addEventListener("load" , setup)