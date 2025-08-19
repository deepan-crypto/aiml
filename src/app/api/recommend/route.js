export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    // Create a detailed prompt for course recommendations with resource links and videos
    const prompt = `You are an expert academic advisor helping students choose courses. Based on the student's profile below, recommend 3-5 specific courses that would be most beneficial for their academic and career goals.

Student Profile: ${message}

Please provide your response in the following format for each course:
**Course Name**
Brief description of what the course covers and key topics
Why this course is recommended for this student's goals and background

Free Resources:
- YouTube: [Specific Channel/Creator Name] - [Specific video series or tutorial name]
- YouTube: [Another Channel] - [Another video series]
- Free Platform: [Platform name] - [Course/resource name]

Video Tutorials:
- [Specific tutorial name] - [Creator/Channel] - [Brief description]
- [Another tutorial] - [Creator/Channel] - [Brief description]

Paid Courses:
- Udemy: [Actual course title] - [Brief description and typical price range]
- Coursera: [Actual course title] - [Brief description and typical price range]
- [Other Platform]: [Course title] - [Brief description and price range]

Requirements:
- Provide REAL, SPECIFIC course recommendations relevant to their field and goals
- Include ACTUAL YouTube channels and creators known for quality educational content
- Suggest REAL paid courses from platforms like Udemy, Coursera, edX, Pluralsight
- Include specific video tutorial series and their creators
- Mix foundational and advanced resources based on their experience level
- Focus on practical, career-relevant skills

Be specific and provide actionable recommendations with real learning resources, not generic placeholders.`;

    // Call Google Gemini 2.5 Pro integration
    const response = await fetch("/integrations/google-gemini-2-5-pro/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Gemini API request failed: ${response.status}`);
    }

    const data = await response.json();
    const recommendations = data.choices[0].message.content;

    return Response.json({ recommendations });
  } catch (error) {
    console.error("Error in recommend API:", error);
    return Response.json(
      { error: "Failed to generate recommendations" },
      { status: 500 },
    );
  }
}
