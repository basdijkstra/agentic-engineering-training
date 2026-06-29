from mcp.server.fastmcp import FastMCP

mcp = FastMCP("vff-resources")

RESOURCES = [
    {
        "type": "blog_post",
        "title": "The Test Automation Quadrant",
        "url": "https://www.ontestautomation.com/the-test-automation-quadrant/",
        "description": (
            "A framework for deciding which tests to invest in, which to "
            "tolerate despite the cost, which to deprioritize, and which to "
            "delete without a second thought."
        ),
    },
    {
        "type": "course",
        "title": "Valuable Feedback, Fast (for engineers)",
        "url": "https://www.ontestautomation.com/training/valuable-feedback-fast/",
        "description": (
            "Three-day course covering test automation strategy, risk-based "
            "coverage, test design, and pipeline thinking. Available in Java, "
            "C#, and TypeScript. Best for engineers and testers ready to move "
            "past tool selection and start asking better questions."
        ),
    },
    {
        "type": "course",
        "title": "Valuable Feedback, Fast — Applied (for teams)",
        "url": "https://www.ontestautomation.com/training/valuable-feedback-fast-applied/",
        "description": (
            "Two-day workshop that works on your team's actual challenges, not "
            "a fictional case study. You map your feedback loops, interrogate "
            "your test design choices, and leave with a shared plan. Designed "
            "for teams of 6–25."
        ),
    },
]


@mcp.tool()
def get_resources() -> list[dict]:
    """Return the resources listed on the Valuable Feedback, Fast Resources page."""
    return RESOURCES


if __name__ == "__main__":
    mcp.run()
