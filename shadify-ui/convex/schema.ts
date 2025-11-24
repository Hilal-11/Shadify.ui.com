import { defineSchema , defineTable} from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        email: v.string(),
        name: v.string(),
        image: v.string(),
        stripeCustomerId: v.string(),
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_email", ["email"])
      .index("by_stripeCustomerId", ["stripeCustomerId"]),

    templates: defineTable({
        id: v.string(),
        projectName: v.string(),
        projectDescription: v.string(),
        projectPrize: v.string(),
        projectLiveURL: v.string(),
        projectImages: v.array(
            v.string()
        ),
        
        projectTechStack: v.array(
            v.object({
                name: v.string() , favIcon: v.string()
            })
        ),
        projectFeatures: v.array(
            v.object({
                feature: v.string(),
                aboutFeature: v.string()
            })
        )
         
    })
})