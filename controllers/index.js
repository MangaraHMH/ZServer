const { Pasien } = require("../models");

class PasienController {
  static async getPasien(req, res, next) {
    try {
      const pasien = await Pasien.findAll();
      res.status(200).json(pasien);
    } catch (err) {
      next(err);
    }
  }

  static async getPasienDetail(req, res, next) {
    try {
      const { id } = req.params;
      const pasien = await Pasien.findByPk(id);

      if (!pasien) {
        throw { name: "Not Found" };
      }
      res.status(200).json(pasien);
    } catch (err) {
      next(err);
    }
  }

  static async addPasien(req, res, next) {
    try {
      const { name, sex, religion, phone, address, nik } = req.body;
      const pasien = await Pasien.create({
        name,
        sex,
        religion,
        phone,
        address,
        nik,
      });
      res.status(201).json(pasien);
    } catch (err) {
      next(err);
    }
  }

  static async updatePasien(req, res, next) {
    try {
      const { id } = req.params;
      const { name, sex, religion, phone, address, nik } = req.body;

      const foundPasien = await Pasien.findByPk(id);

      if (!foundPasien) {
        throw { name: "Not Found" };
      }

      await Pasien.update(
        {
          name,
          sex,
          religion,
          phone,
          address,
          nik,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({ message: `${foundPasien.name} success updated` });
    } catch (err) {
      next(err);
    }
  }

  static async deletePasien(req, res, next) {
    try {
      const { id } = req.params;
      const foundPasien = await Pasien.findByPk(id);

      if (!foundPasien) {
        throw { name: "Not Found" };
      }

      await Pasien.destroy({ where: { id } });
      res.status(200).json({ message: `${foundPasien.name} success to deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PasienController;
