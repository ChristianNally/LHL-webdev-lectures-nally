import ObjectivesSearchForm from "./ObjectivesSearchForm";
import ObjectivesList from "./ObjectivesList";

const ObjectiveBrowser = () => {
  return (
    <div>
      <ObjectivesSearchFrom
        searchDetails={searchDetails}
        newSearchDetails={newSearchDetails}
      />
      <ObjectivesList objectives={filteredObjectives} />
    </div>
  );
};
