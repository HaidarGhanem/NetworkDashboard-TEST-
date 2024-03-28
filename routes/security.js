require('dotenv').config();
const data = require('../devices.json');
const express = require('express');
const router = express.Router();

//---------------------------------- Security Panel -------------------------------

//IPs accesses functionality
//----------------------------------
//------ GET security/access -------
//----------------------------------
router.get('/access/:router_ip/:allowed_ips/:banned_ips',  (req, res) => {
    const { router_ip, allowed_ips, banned_ips } = req.params;
    try {
        if (!router_ip || !allowed_ips || !banned_ips) {
            return res.status(400).json({ error: "IPs parameters are missing" });
        }
        const result = "Permit configuration for 192.168.3.3 - FAILED";
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//Configurations audit functionality
//----------------------------------
//---- GET security/configaudit ----
//----------------------------------
router.get('/configaudit/:ip',  (req, res) => {
    const { ip } = req.params;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const result = {
            "device_ip": "192.168.192.131",
            "diff_percentage": "50.0"
        };
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

//apply the standard security
//----------------------------------
//--- GET security/applysecurity ---
//----------------------------------
router.get('/applysecurity/:ip',  (req, res) => {
    const { ip } = req.params;
    try {
        if (!ip) {
            return res.status(400).json({ error: "IP parameter is missing" });
        }
        const result = [
            "Successfully configured ip http server",
            "Successfully configured ip finger",
            "Successfully configured service finger"
        ];
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("An error occurred");
    }
});

module.exports = router;