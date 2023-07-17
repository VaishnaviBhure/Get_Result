function getResult() {
    let h, c, j, tot, avg, grd;
    // call data from user interface
    h = parseInt(hm.value);
    c = parseInt(cm.value);
    j = parseInt(jm.value);
    tot = h + c + j;
    avg = tot / 3;


    if (h >= 40 && c >= 40 && j >= 40) {
        if (avg >= 80)
            grd = "A+";
        else if (avg >= 70)
            grd = "A";
        else if (avg >= 60)
            grd = "B+";
        else if (avg >= 50)
            grd = "B";
        else
            grd = "D";
    }
    else {
        grd = "Fail";
    }

    // alert(tot)
    // total.value = "Total Marks:" +tot;
    // average.value = "Average:" +avg;
    // CanvasGradient.value = "Grade :"+grd;

    // DOM
    document.getElementById('total').innerHTML = "Total Marks:" + tot;
    document.getElementById('average').innerHTML = "Average: " + avg;

    document.getElementById('grade').innerHTML = "Grade:" + grd;

}