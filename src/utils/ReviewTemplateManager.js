export class ReviewTemplateManager {
  static getTemplates(vehicleName, ratingId, experiences, count = 3) {
    const intros = {
      excellent: [
        `Very satisfied with the ${vehicleName} service provided by Amman Earth Movers.`,
        `I had a fantastic experience renting the ${vehicleName} for our recent construction project.`,
        `The ${vehicleName} we rented from Amman Earth Movers exceeded all our expectations.`,
        `We highly recommend Amman Earth Movers after using their ${vehicleName} recently.`,
        `Absolutely stellar experience with the ${vehicleName} rental service.`
      ],
      good: [
        `Good experience overall with the ${vehicleName} from Amman Earth Movers.`,
        `The ${vehicleName} we rented did the job well and met our project needs.`,
        `Solid and dependable service for the ${vehicleName} rental.`,
        `We were quite pleased with the ${vehicleName} performance on our site.`,
        `A reliable choice for renting a ${vehicleName}.`
      ],
      average: [
        `The ${vehicleName} service was decent, but there is room for improvement.`,
        `Our experience with the ${vehicleName} was just average overall.`,
        `The ${vehicleName} got the job done, though the service was fairly standard.`,
        `An acceptable experience renting the ${vehicleName}, nothing extraordinary.`,
        `The ${vehicleName} served its purpose for our project.`
      ],
      poor: [
        `We encountered some issues with the ${vehicleName} service.`,
        `Our experience with the ${vehicleName} rental fell short of our expectations.`,
        `Unfortunately, the ${vehicleName} service needs significant improvement.`,
        `I was disappointed with the ${vehicleName} we rented recently.`,
        `The ${vehicleName} rental did not go as smoothly as we had hoped.`
      ]
    };

    const expTextMap = {
      excellent: {
        timely: ["The project was completed in a very timely manner.", "They were incredibly punctual and respectful of our schedule."],
        professional: ["The staff handled everything with utmost professionalism.", "The team was highly professional and courteous throughout."],
        condition: ["The equipment condition was excellent and ran flawlessly.", "The machine was perfectly maintained and clean."],
        coordination: ["The coordination process was smooth and hassle-free.", "Booking and logistics were handled effortlessly."],
        reliable: ["The overall support was completely reliable.", "They proved to be a highly dependable partner."],
        fast: ["The coordination team responded very quickly to our needs.", "We appreciated their fast response time."]
      },
      good: {
        timely: ["The delivery and pickup were mostly on time.", "The timing worked out well for our schedule."],
        professional: ["The staff was professional during our interactions.", "They maintained a good standard of professionalism."],
        condition: ["The equipment was in good working condition.", "The machine operated well without major issues."],
        coordination: ["Coordination was relatively straightforward.", "Setting everything up was fairly easy."],
        reliable: ["The service was reliable enough for our needs.", "We found their support to be dependable."],
        fast: ["They were reasonably quick to respond to inquiries.", "Response times were generally fast."]
      },
      average: {
        timely: ["Timing was acceptable, though not perfect.", "They were mostly on time, with slight delays."],
        professional: ["The staff was polite and did their job.", "Professionalism was standard."],
        condition: ["The equipment condition was okay, though showing some wear.", "The machine worked, but wasn't in perfect shape."],
        coordination: ["Coordination was fine, though it could be smoother.", "Logistics were handled adequately."],
        reliable: ["The service was somewhat reliable.", "They were dependable for the most part."],
        fast: ["Response times were average.", "They replied in a reasonable timeframe."]
      },
      poor: {
        timely: ["There were frustrating delays with the schedule.", "Timing was a major issue for our project."],
        professional: ["Professionalism was lacking during our engagement.", "Staff could have been more professional."],
        condition: ["The equipment condition was poor and caused delays.", "The machine was not properly maintained."],
        coordination: ["Coordination was difficult and confusing.", "Booking logistics were poorly handled."],
        reliable: ["The service proved to be unreliable.", "We could not depend on their support."],
        fast: ["Response times were far too slow.", "Getting a reply took much longer than expected."]
      }
    };

    const outros = {
      excellent: [
        `Highly recommended!`,
        `Will definitely rent from them again.`,
        `A top-tier equipment rental experience.`,
        `Thank you for the excellent service!`,
        `I wouldn't hesitate to use their services for future projects.`
      ],
      good: [
        `Would consider using them again.`,
        `Overall a positive experience.`,
        `Good value for the service provided.`,
        `Thanks for the support.`,
        `A solid option for construction rentals.`
      ],
      average: [
        `Might use again if needed.`,
        `Fair experience overall.`,
        `Adequate service for the price.`,
        `Hoping for a slightly better experience next time.`,
        `Served our immediate needs.`
      ],
      poor: [
        `I hope these issues are addressed.`,
        `Would likely look elsewhere next time.`,
        `Needs better quality control.`,
        `Disappointing overall experience.`,
        `Cannot recommend based on this experience.`
      ]
    };

    // Helper to get random item from array
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Generate a massive pool of potential templates (125+ combinations per rating/experience profile)
    // By dynamically combining fragments, we easily exceed 100 unique templates per vehicle.
    let generated = [];
    let attempts = 0;

    const currentIntros = intros[ratingId] || intros.good;
    const currentOutros = outros[ratingId] || outros.good;
    const currentExpMap = expTextMap[ratingId] || expTextMap.good;

    while (generated.length < count && attempts < 50) {
      attempts++;
      let intro = getRandom(currentIntros);
      
      let bodyParts = [];
      // Grab up to 2-3 random experiences from what the user selected to keep it concise (20-30 words)
      const shuffledExp = [...experiences].sort(() => 0.5 - Math.random()).slice(0, 3);
      
      if (shuffledExp.length > 0) {
        shuffledExp.forEach(exp => {
          if (currentExpMap[exp]) {
            bodyParts.push(getRandom(currentExpMap[exp]));
          }
        });
      } else {
        // If no experiences selected, fallback to a generic body based on rating
        if (ratingId === 'excellent' || ratingId === 'good') {
          bodyParts.push("The entire process went off without a hitch and the equipment performed beautifully.");
        } else {
          bodyParts.push("The equipment performance and overall process left much to be desired.");
        }
      }

      let outro = getRandom(currentOutros);

      let fullReview = `${intro} ${bodyParts.join(' ')} ${outro}`;

      if (!generated.includes(fullReview)) {
        generated.push(fullReview);
      }
    }

    return generated;
  }
}
