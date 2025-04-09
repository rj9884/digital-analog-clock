const hour = document.querySelector(".hour");
        const min = document.querySelector(".min");
        const sec = document.querySelector(".sec");
        const hh_dig = document.querySelector("#hh");
        const mm_dig = document.querySelector("#mm");
        const ss_dig = document.querySelector("#ss");
        const dateDisplay = document.querySelector("#date");
        
        let displayTime = () => {
            let date = new Date();
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();
            
            // Add leading zeros for single digits
            hh_dig.innerHTML = hh < 10 ? "0" + hh : hh;
            mm_dig.innerHTML = mm < 10 ? "0" + mm : mm;
            ss_dig.innerHTML = ss < 10 ? "0" + ss : ss;
            
            // Update date display
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateDisplay.innerHTML = date.toLocaleDateString(undefined, options);
            
            // Calculate rotations for clock hands
            let hRotation = (30 * hh) + (mm * 1/2);
            let mRotation = mm * 6;
            let sRotation = ss * 6;
            
            hour.style.transform = `rotate(${hRotation}deg)`;
            min.style.transform = `rotate(${mRotation}deg)`;
            sec.style.transform = `rotate(${sRotation}deg)`;
        };
        
        // Display immediately then update every second
        displayTime();
        setInterval(displayTime, 1000);