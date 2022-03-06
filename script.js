window.onload = () => {
    activeColor = "#ffffff";
    inactiveColor = "#7078C9";

    daybtn = document.querySelector(".daily");
    weekbtn = document.querySelector(".weekly");
    monthbtn = document.querySelector(".monthly");
    weekbtn.style.color = "#ffffff";

    displays= [
        [document.querySelector(".work-current"), document.querySelector(".work-previous")],
        [document.querySelector(".play-current"), document.querySelector(".play-previous")],
        [document.querySelector(".study-current"), document.querySelector(".study-previous")],
        [document.querySelector(".exercise-current"), document.querySelector(".exercise-previous")],
        [document.querySelector(".social-current"), document.querySelector(".social-previous")],
        [document.querySelector(".self-care-current"), document.querySelector(".self-care-previous")]
    ];


    function select(timeframe) {
        tf = 0;
        switch (timeframe) {
            case "daily":
                for(let i = 0; i<=5; i++) {
                    displays[i][0].innerHTML = `${data[i].timeframes.daily.current}hrs`;
                    displays[i][1].innerHTML = `Yesterday - ${data[i].timeframes.daily.previous}hrs`;
                }
                break;
            case "weekly":
                for(let i = 0; i<=5; i++) {
                    displays[i][0].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
                    displays[i][1].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
                }
                break;
            case "monthly":
                for(let i = 0; i<=5; i++) {
                    displays[i][0].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
                    displays[i][1].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
                }
                break;
            default:
                break;
        }
    }

    daybtn.onclick = function() {
        daybtn.style.color = activeColor;
        weekbtn.style.color = inactiveColor;
        monthbtn.style.color = inactiveColor;
        select("daily");
    };

    weekbtn.onclick = function() {
        daybtn.style.color = inactiveColor;
        weekbtn.style.color = activeColor;
        monthbtn.style.color = inactiveColor;
        select("weekly");
    };

    monthbtn.onclick = function() {
        daybtn.style.color = inactiveColor;
        weekbtn.style.color = inactiveColor;
        monthbtn.style.color = activeColor;
        select("monthly");
    };
}