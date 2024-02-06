import superheroModel from "../../models/superheroModel.js";
import missionModel from "../../models/missionModel.js";

const resolvers = {
  Query: {
    async superheroes(parent, args, contextValue, info) {
      console.log("contextValue :>> ".yellow, contextValue);
      const superheroesArray = await superheroModel.find();
      console.log("superheroesArray :>> ", superheroesArray);
      return superheroesArray;
    },
    async missions() {
      const missionsArray = await missionModel.find();
      return missionsArray;
    },

    async superhero(parent, args, contextValue) {
      console.log("contextValue :>> ".yellow, contextValue);

      //   console.log("args :>> ".bgBlue, args);
      return await superheroModel.findById(args.id);
    },
    async mission(_, args) {
      //   console.log("args :>> ".bgBlue, args);
      return await missionModel.findById(args.id);
    },
  },

  Superhero: {
    async assignedMission(parent) {
      console.log("parent :>> ", parent);
      const assignedMission = await await missionModel.findById(
        parent.assignedMission
      );

      console.log("assignedMission :>> ", assignedMission);
      return assignedMission;
    },
  },

  Mission: {
    async assignedTo(parent) {
      console.log("parent :>> ", parent);
      const superheroesIdsArray = parent.assignedTo;
      const assignedSupsArray = superheroesIdsArray.map(async (supId) => {
        return await superheroModel.findById(supId);
      });
      return assignedSupsArray;
    },
  },

  Mutation: {
    async addSuperhero(_, args) {
      console.log("args :>> ", args);
      const newSuperhero = new superheroModel({
        ...args.newSuperhero,
      });
      await newSuperhero.save();
      return newSuperhero;
    },
    async deleteSuperhero(_, args) {
      return await superheroModel.findByIdAndDelete(args.id);
    },

    async updateSuperhero(_, args) {
      return await superheroModel.findByIdAndUpdate(
        args.id,
        {
          $set: {
            secretIdentity: args.edits.secretIdentity,
          },
          $addToSet: { superpowers: args.edits.superpowers },
        },
        { new: true }
      );
    },
  },
};

export { resolvers };
