require('dotenv').config();
const express = require('express');
const router = express.Router();

//-------------------------------------the dashboard functionality-----------------------------------


//fetch the basic hardware info for the dashboard for the first device
//----------------------------------
//--------- GET /basicInfo ---------
//----------------------------------
router.get('/basicInfo', (req, res) => {
    try {
        const resultHardware = {
            "Hardware Information": {
                "NAME": "Chassis",
                "DESCR": "Cisco 7206VXR, 6-slot chassis",
                "PID": "CISCO7206VXR",
                "SN": "4279256517"
            }
        };
        
        const resultInterfaces = {
            "FastEthernet0/0": "up",
            "FastEthernet1/0": "up",
            "FastEthernet2/0": "up"
        };
        
        res.json({ resultHardware, resultInterfaces });
        console.log({ resultHardware, resultInterfaces });
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//return an input for the checkConnectivity section
//----------------------------------
//----- GET /basicConnectivity -----
//----------------------------------
router.get('/basicConnectivity/:src_ip/:dst_ip', (req, res) => {
    const { src_ip, dst_ip } = req.params;
    try {
        if (!src_ip || !dst_ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const resultConnectivity = "Success rate is 100 percent (5/5)";
        console.log(resultConnectivity);
        res.json(resultConnectivity);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

module.exports = router;