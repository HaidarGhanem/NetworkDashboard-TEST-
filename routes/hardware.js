require('dotenv').config();
const express = require('express');
const router = express.Router();

//----------------------------------------Hardware Panel-----------------------------------
//fetch the hardware info for devices
//----------------------------------
//------- GET /hardware/info -------
//----------------------------------
router.get('/info/:ip', (req, res) => {
    const ip = req.params.ip;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        
        const result = {
            "Hardware Information": {
                "NAME": "Chassis",
                "DESCR": "Cisco 7206VXR, 6-slot chassis",
                "PID": "CISCO7206VXR",
                "SN": "4279256517"
            }
        };
        
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

module.exports = router;