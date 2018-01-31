describe("Validate the Codice Fiscale library", function () {

    let CF = require('../lib/CodiceFiscale');

    it("should verify a real Italian Codice Fiscale and fail on a fake one", function () {
        expect(CF.check('MNTMHL*********T')).toBeTruthy();
        expect(CF.check('MNTMNT*********O')).toBeTruthy();
        expect(CF.check('NMTMHL*********T')).toBeFalsy();
    });

    it("should guess correctly an Italian Codice Fiscale", function () {
        expect(CF.guess('MNTMHL*********')).toBe('MNTMHL*********T');
        expect(CF.guess('MNTMNT*********')).toBe('MNTMNT*********O');
    });

    it("should return the correct control character", function () {
        expect(CF.controllo('MNTMHL*********')).toBe('T');
        expect(CF.controllo('MNTMNT*********')).toBe('O');
    });


});
