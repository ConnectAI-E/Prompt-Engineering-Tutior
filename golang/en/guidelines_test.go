package main

import "testing"

func TestSummaryContent(t *testing.T) {
	CommonLoad()
	SummaryContent()
}

func TestPrettyJson(t *testing.T) {
	CommonLoad()
	PrettyJson()
}

func TestGenSteps(t *testing.T) {
	CommonLoad()
	GenSteps()
}

func TestGenStepsOption(t *testing.T) {
	CommonLoad()
	GenStepsOption()
}

func TestFewShot(t *testing.T) {
	CommonLoad()
	FewShot()
}

func TestSpecifySteps(t *testing.T) {
	CommonLoad()
	SpecifySteps()
}

func TestSpecifyOutput(t *testing.T) {
	CommonLoad()
	SpecifyOutput()

}

func TestMathSolution(t *testing.T) {
	CommonLoad()
	MathSolution()
}
