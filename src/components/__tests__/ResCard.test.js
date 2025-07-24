import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json"

describe("ResCard", () => {
    it("should render res card", () => {
        render(<ResCard resData={MOCK_DATA}/>);
        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });
})