function myFunction() {
    var Bday, Bmonth, Byear,date, x, y, z, resultX, resultY, resultZ;
    Bday = document.getElementById('day').value;
    Bmonth = document.getElementById('month').value;
    Byear = document.getElementById('year').value;
    
    date = new Date();
    
    x = date.getFullYear();
    y = date.getMonth();
    z = date.getDay();
    
    resultX = x-Byear;
    resultY = Bmonth-y;
    resultZ = Bday-z;
    
    document.getElementById('hereYouryear').innerHTML = resultX;
    document.getElementById('hereYourmonth').innerHTML = resultY;
    document.getElementById('hereYourday').innerHTML = resultZ;
    
    var disFun = document.getElementById('displayFunction');
    
    if(disFun.style.display == 'none') {
        disFun.style.display = "block";
    }else {
        disFun.style.display = 'none';
    }
    
}