import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "roles",
  },
  assignedProfessor: {
    type: Schema.Types.ObjectId,
    ref: "professors",
  },
  topic: String,
  department: String,
  college: {
    type: Schema.Types.ObjectId,
  },
  university: {
    type: Schema.Types.ObjectId,
    ref: "university",
  },
  askedProf: [
    {
      type: Schema.Types.ObjectId,
      ref: "professors",
    },
  ],
  ethicsCommittee: {
    approved: Boolean,
    committee: {
      members: [{ type: Schema.Types.ObjectId }],
    },
  },
  dissertationCommittee: {
    approved: Boolean,
    committee: {
      members: [{ type: String }],
    },
  },

  description: String,
});

export const ProjectModel = model("project", projectSchema);
