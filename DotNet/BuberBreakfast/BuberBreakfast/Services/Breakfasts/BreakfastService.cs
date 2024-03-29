using BuberBreakfast.Models;
using BuberBreakfast.ServiceErrors;
using ErrorOr;

namespace BuberBreakfast.Services.Breakfasts;

public class BreakfastService : IBreakfastService {

    private static readonly Dictionary<Guid, Breakfast> _breakfasts = new();

    public ErrorOr<Created> CreateBreakfast(Breakfast breakfast) {
        _breakfasts.Add(breakfast.Id, breakfast);
        return Result.Created;
    }

    public ErrorOr<Breakfast> GetBreakfast(Guid id) {
        if (_breakfasts.TryGetValue(id, out var breakfast)) return breakfast;
        return Errors.Breakfast.NotFoud;
    }

    public ErrorOr<UpsertedBreakfast> UpsertBreakfast(Breakfast breakfast) {
        var isNewlyCreated = !_breakfasts.ContainsKey(breakfast.Id);
        _breakfasts[breakfast.Id] = breakfast;
        return new UpsertedBreakfast(isNewlyCreated);
    }

    public ErrorOr<Deleted> DeleteBreakfast(Guid id) {
        if (_breakfasts.TryGetValue(id, out var breakfast)) {
            _breakfasts.Remove(id);
            return Result.Deleted;
        }
        return Errors.Breakfast.NotFoud;
    }


}