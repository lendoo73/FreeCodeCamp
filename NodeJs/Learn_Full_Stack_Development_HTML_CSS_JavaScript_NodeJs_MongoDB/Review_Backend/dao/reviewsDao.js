import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDao {
    static async injectDb(conn) {
        if (reviews) {
            return;
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDao: ${e}`);
        }
    }

    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = {
                movieId: parseInt(movieId),
                user,
                review
            };

            return await reviews.insertOne(reviewDoc);
        } catch (e) {
            console.error(`Unable to post review: ${e}`);
            return {error: e};
        }
    }

    static async getReview(reviewId) {
        try {
            return await reviews.findOne({_id: ObjectId(reviewId)});
        } catch (e) {
            console.error(`Unable to get review: ${e}`);
            return {error: e};
        }
    }

    static async updateReview(reviewId, user, review) {
        try {
            const updateResponse = await reviews.updateOne(
                {_id: ObjectId(reviewId)},
                {$set: {user, review}}
            );

            return updateResponse;
        } catch (e) {
            console.error(`Unable to update review: ${e}`);
            return {error: e};
        }
    }

    static async deleteReview(reviewId) {
        try {
            const deleteResponse = await reviews.deleteOne({_id: ObjectId(reviewId)});

            return deleteResponse;
        } catch (e) {
            console.error(`Unable to delete review: ${e}`);
            return {error: e};
        }
    }

    static async getReviewsByMovieId(movieId) {
        try {
            const cursor = await reviews.find({movieId: parseInt(movieId)});
            return cursor.toArray();
        } catch (e) {
            console.error(`Unable to get reviews: ${e}`);
            return {error: e};
        }
    }
}